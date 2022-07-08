import color from 'color'

export const blankPalette = {
	logo: '#ffffff',
	highlight: '#ffffff',
	primary100: '#ffffff',
	primary99: '#ffffff',
	primary95: '#ffffff',
	primary90: '#ffffff',
	primary80: '#ffffff',
	primary70: '#ffffff',
	primary60: '#ffffff',
	primary50: '#ffffff',
	primary40: '#ffffff',
	primary30: '#ffffff',
	primary20: '#ffffff',
	primary10: '#ffffff',
	primary0: '#ffffff',
	secondary100: '#ffffff',
	secondary99: '#ffffff',
	secondary95: '#ffffff',
	secondary90: '#ffffff',
	secondary80: '#ffffff',
	secondary70: '#ffffff',
	secondary60: '#ffffff',
	secondary50: '#ffffff',
	secondary40: '#ffffff',
	secondary30: '#ffffff',
	secondary20: '#ffffff',
	secondary10: '#ffffff',
	secondary0: '#ffffff',
	tertiary100: '#ffffff',
	tertiary99: '#ffffff',
	tertiary95: '#ffffff',
	tertiary90: '#ffffff',
	tertiary80: '#ffffff',
	tertiary70: '#ffffff',
	tertiary60: '#ffffff',
	tertiary50: '#ffffff',
	tertiary40: '#ffffff',
	tertiary30: '#ffffff',
	tertiary20: '#ffffff',
	tertiary10: '#ffffff',
	tertiary0: '#ffffff',
	neutral100: '#ffffff',
	neutral99: '#ffffff',
	neutral95: '#ffffff',
	neutral90: '#ffffff',
	neutral80: '#ffffff',
	neutral70: '#ffffff',
	neutral60: '#ffffff',
	neutral50: '#ffffff',
	neutral40: '#ffffff',
	neutral30: '#ffffff',
	neutral20: '#ffffff',
	neutral10: '#ffffff',
	neutral0: '#ffffff',
	neutralVariant100: '#ffffff',
	neutralVariant99: '#ffffff',
	neutralVariant95: '#ffffff',
	neutralVariant90: '#ffffff',
	neutralVariant80: '#ffffff',
	neutralVariant70: '#ffffff',
	neutralVariant60: '#ffffff',
	neutralVariant50: '#ffffff',
	neutralVariant40: '#ffffff',
	neutralVariant30: '#ffffff',
	neutralVariant20: '#ffffff',
	neutralVariant10: '#ffffff',
	neutralVariant0: '#ffffff',
	error100: '#ffffff',
	error99: '#ffffff',
	error95: '#ffffff',
	error90: '#ffffff',
	error80: '#ffffff',
	error70: '#ffffff',
	error60: '#ffffff',
	error50: '#ffffff',
	error40: '#ffffff',
	error30: '#ffffff',
	error20: '#ffffff',
	error10: '#ffffff',
	error0: '#ffffff',
}

export type ColorPalette = typeof blankPalette

export type ColorTheme = {
	palette: ColorPalette
	themeColors: {
		highlight: string
		primary: string
		onPrimary: string
		primaryContainer: string
		secondary: string
		secondaryContainer: string
		onSecondaryContainer: string
		tertiary: string
		onTertiary: string
		tertiaryContainer: string
		tertiaryBorder: string
		error: string
		errorContainer: string
		onErrorContainer: string
		background: string
		onBackground: string
		surface: string
		onSurface: string
		surfaceVariant: string
		outline: string
		regularText: string
		strongText: string
		softText: string
		surface1: string
		surface4: string
		surface5: string
		beginner: string
		intermediate: string
		advanced: string
		white: string
	}
}

export function lightThemeFromPalette(p: ColorPalette): ColorTheme {
	const surface = color(p.neutral99)
	const primary = color(p.primary40)
	return {
		palette: p,
		themeColors: {
			highlight: p.highlight,
			primary: p.primary40,
			onPrimary: p.primary100,
			primaryContainer: p.primary90,
			secondary: p.secondary40,
			secondaryContainer: p.secondary90,
			onSecondaryContainer: p.secondary10,
			tertiary: p.tertiary40,
			onTertiary: p.tertiary100,
			tertiaryContainer: p.tertiary90,
			tertiaryBorder: p.neutral80,
			error: p.error40,
			errorContainer: p.error90,
			onErrorContainer: p.error10,
			background: p.neutral99,
			onBackground: p.neutral10,
			surface: surface.hex(),
			onSurface: p.neutral10,
			surfaceVariant: p.neutralVariant90,
			outline: p.neutralVariant50,
			regularText: p.neutral20,
			strongText: p.neutral0,
			softText: p.neutral60,
			surface1: surface.mix(primary, 0.05).hex(),
			surface4: surface.mix(primary, 0.12).hex(),
			surface5: surface.mix(primary, 0.14).hex(),
			beginner: '#4C9099',
			intermediate: '#8059B2',
			advanced: '#B25959',
			white: '#FFFFFF',
		},
	}
}

export function darkThemeFromPalette(p: ColorPalette): ColorTheme {
	const surface = color(p.neutral10)
	const primary = color(p.primary40)
	return {
		palette: p,
		themeColors: {
			highlight: p.logo,
			primary: p.primary80,
			onPrimary: p.primary20,
			primaryContainer: p.primary30,
			secondary: p.secondary80,
			secondaryContainer: p.secondary30,
			onSecondaryContainer: p.secondary90,
			tertiary: p.tertiary80,
			onTertiary: p.tertiary20,
			tertiaryBorder: p.neutral80,
			tertiaryContainer: p.tertiary30,
			error: p.error80,
			errorContainer: p.error30,
			onErrorContainer: p.error90,
			background: p.neutral10,
			onBackground: p.neutral90,
			surface: surface.hex(),
			onSurface: p.neutral90,
			surfaceVariant: p.neutralVariant30,
			outline: p.neutralVariant60,
			regularText: p.neutral80,
			strongText: p.neutral100,
			softText: p.neutral60,
			surface1: surface.mix(primary, 0.05).hex(),
			surface4: surface.mix(primary, 0.12).hex(),
			surface5: surface.mix(primary, 0.14).hex(),
			beginner: '#4C9099',
			intermediate: '#8059B2',
			advanced: '#B25959',
			white: '#FFFFFF',
		},
	}
}
