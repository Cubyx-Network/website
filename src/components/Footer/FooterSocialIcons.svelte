<script>
	import FooterSocialIcon from './FooterSocialIcon.svelte';

	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
	import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
	import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit';
	import { faEarthEurope } from '@fortawesome/free-solid-svg-icons/faEarthEurope';
	import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
</script>

<div class="flex flex-wrap items-center gap-3 md:gap-4">
	<FooterSocialIcon icon={faDiscord} href="https://cubyx.eu/discord" />
	<FooterSocialIcon icon={faTwitch} href="https://cubyx.eu/twitch" />
	<FooterSocialIcon icon={faYoutube} href="https://cubyx.eu/youtube" />
	<FooterSocialIcon icon={faSpotify} href="https://cubyx.eu/podcast" />
	<FooterSocialIcon icon={faMastodon} href="https://cubyx.eu/mastodon" />
	<FooterSocialIcon icon={faReddit} href="https://cubyx.eu/reddit" />
	<FooterSocialIcon icon={faEarthEurope} href="https://cubyx.eu/planetmc" />
</div>
