import {ContributorBanner as _ContributorBanner} from '@framework/system/src/components/homepage/contributor-banner'
import {ContributorData} from '@framework/system/src/components/homepage/contributor'


export default function ContributorBanner({contributors}:{contributors: ContributorData[]}) {
    return (<_ContributorBanner contributors={contributors}/>)
}