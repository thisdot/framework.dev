import React, { useCallback, useEffect, useRef, useState } from "react"
import { Library } from "../../models/library"
import {
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
} from "./comparison-table.css"
import { ColHeading, RowHeading, TD } from "./components/cells"
import { HorizontalScrollbar } from "./components/horizontal-scrollbar"
import { ISortConfig, ILibrary } from "./types"
import { sortLibraries, formatPercentage, formatNumber } from "./utils"
import { CardSelector } from "./../cards/card-selector"
import { Skeleton } from "../skeleton"

export interface ComparisonTableProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
}

export function ComparisonTable({
	libraries,
	className,
	...props
}: ComparisonTableProps) {
	const [loading, setLoading] = useState<boolean>(false)
	const mountedRef = useRef<boolean>(false)
	const [data, setData] = useState<ILibrary[]>([])
	const [sortConfig, setSortConfig] = useState<ISortConfig>({
		by: "name",
		asc: false,
	})

	const handleSort = useCallback(
		(heading: typeof sortConfig.by) => {
			setSortConfig((prevSort) => {
				if (prevSort.by === heading) {
					return { by: heading, asc: !prevSort.asc }
				}
				if (heading === "name" || heading === "author") {
					return { by: heading, asc: true }
				}
				return { by: heading, asc: false }
			})
		},
		[sortConfig]
	)

	useEffect(() => {
		const abortController = new AbortController()

		async function fetchData() {
			setLoading(true)
			const npmsio = await fetch(`https://api.npms.io/v2/package/mget`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(
					libraries.map((library) => {
						if (library.package.includes("npmjs.com")) {
							return library.package.replace(
								/(?:http(?:s)?:\/\/(?:www\.)?)npmjs\.com\/package\//,
								""
							)
						}
						return library.package
					})
				),
				signal: abortController.signal,
			})
				.then((res) => res.json())
				.catch((error) => {
					if (error.name === "AbortError") {
						return
					}
				})
			const data: ILibrary[] = libraries.map((library) => {
				return {
					name: library.name,
					author: library.author,
					image: library.image,
					href: library.href,
					coverage: npmsio[library.package]?.evaluation?.quality?.tests,
					downloads:
						npmsio[library.package]?.collected?.npm?.downloads[1]?.count,
					health: npmsio[library.package]?.evaluation?.quality?.health,
					stars: npmsio[library.package]?.collected?.github?.starsCount,
				}
			})
			setData(data)
		}

		if (!mountedRef.current) {
			mountedRef.current = true

			fetchData()
				.then(() => {
					handleSort("name")
				})
				.catch((error) => {
					if (error.name === "AbortError") {
						return
					}
				})
				.finally(() => {
					setLoading(false)
				})
		}

		return () => abortController.abort()
	}, [handleSort, libraries])

	const libraryStats = React.useMemo(
		() => sortLibraries(data, sortConfig),
		[data, sortConfig]
	)

	function handleTableRows() {
		if (loading) {
			// Return 3 times
			return Array.from({ length: 3 }, () => (
				<>
					<tr style={{ display: "contents" }}>
						<RowHeading>
							<Skeleton variant="circle" width={20} height={20} />
						</RowHeading>

						<TD>
							<Skeleton variant="text" height={20} width={100} />
						</TD>
						<TD>
							<Skeleton variant="text" height={20} width={100} />
						</TD>
						<TD>
							<Skeleton variant="text" height={20} width={150} />
						</TD>
						<TD>
							<Skeleton variant="text" height={20} width={150} />
						</TD>
						<TD>
							<Skeleton variant="text" height={20} width={100} />
						</TD>
						<TD>
							<Skeleton variant="text" height={20} width={100} />
						</TD>
					</tr>
				</>
			))
		}

		return libraryStats.map((library) => (
			<tr style={{ display: "contents" }} key={library.name}>
				<RowHeading>
					<CardSelector
						checked={true}
						onChange={(e) => {
							e.stopPropagation()

							if (!e.target.checked) {
								const updatedLibraryStats = libraryStats

								updatedLibraryStats.splice(
									updatedLibraryStats.indexOf(library),
									1
								)

								setData(updatedLibraryStats)
							}
						}}
					/>
				</RowHeading>
				<TD>
					<img
						alt=""
						src={library.image}
						className={comparisonTableLibraryIconStyle}
					/>
					<a href={library.href} target="_blank" rel="noopener noreferrer">
						{library.name}
					</a>
				</TD>
				<TD>{library.author}</TD>
				<TD>{library.coverage ? formatPercentage(library.coverage) : "N/A"}</TD>
				<TD>{library.downloads ? formatNumber(library.downloads) : "N/A"}</TD>
				<TD>{library.health ? formatPercentage(library.health) : "N/A"}</TD>
				<TD>{library.stars ? formatNumber(library.stars) : "N/A"}</TD>
			</tr>
		))
	}

	return (
		<div className={className} {...props}>
			{libraryStats && (
				<HorizontalScrollbar>
					<table className={comparisonTableStyle}>
						<thead style={{ display: "contents" }}>
							<tr style={{ display: "contents" }}>
								<ColHeading></ColHeading>
								<ColHeading
									name="name"
									sort={sortConfig}
									onClick={() => handleSort("name")}
								>
									Name
								</ColHeading>
								<ColHeading
									name="author"
									sort={sortConfig}
									onClick={() => handleSort("author")}
								>
									Author
								</ColHeading>
								<ColHeading
									name="coverage"
									sort={sortConfig}
									onClick={() => handleSort("coverage")}
								>
									Testing Coverage
								</ColHeading>
								<ColHeading
									name="downloads"
									sort={sortConfig}
									onClick={() => handleSort("downloads")}
								>
									Weekly Downloads
								</ColHeading>
								<ColHeading
									name="health"
									sort={sortConfig}
									onClick={() => handleSort("health")}
								>
									Overall Health
								</ColHeading>
								<ColHeading
									name="stars"
									sort={sortConfig}
									onClick={() => handleSort("stars")}
								>
									Stars
								</ColHeading>
							</tr>
						</thead>
						<tbody style={{ display: "contents" }}>{handleTableRows()}</tbody>
					</table>
				</HorizontalScrollbar>
			)}
		</div>
	)
}
