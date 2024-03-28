type TrackingCustomEvents = {
	resource_clicked: {
		resource_name: string;
	};
	resource_compare_add: {
		resource_name: string;
	};
	resource_compare_open: void;
	resource_compare_select_all: void;
	resource_compare_reset: void;
	resource_compare_remove: {
		resource_name: string;
	};
	resource_compare_sort: {
		order: 'asc' | 'desc';
	};
	// Recommended event: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=9801509268566726236-NA&client_type=gtag#search
	search: {
		search_term: string;
	};
	advanced_search_open: void;
	advanced_search_run: {
		search_term: string;
		params: Record<string, unknown>;
	};
};

export const track = <T extends keyof TrackingCustomEvents>(
	event: T,
	...data: TrackingCustomEvents[T] extends void ? [] : [TrackingCustomEvents[T]]
): void => {
	import.meta.env.VITE_ENVIRONMENT === 'production'
		? data[0] != null
			? gtag('event', event, data[0])
			: gtag('event', event)
		: data[0] != null
			? console.info('track', event, data[0])
			: console.info('track', event);
};
