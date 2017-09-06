export const config = () => {
	config.event = 'Harvey';
	config.additionalText = '**Need help? [Find shelters here.](http://houstonsheltermap.com/)**';

	config.dataEntryPortal = '//api.harveyneeds.org';
	config.apiBaseURL = '//api.harveyneeds.org/api/v1/';

	config.mapDefaults = {
		center: {
			lat: 29.7604,
			lng: -95.3698
		},
			zoom: 12
	};
}