<script>
	import Header from '$lib/organisms/Header.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from '$lib/organisms/nav.svelte';
	// later weghalen
	import NavFilterList from '../lib/atoms/nav-filter-list.svelte';

	export let data;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<Header path={$page.url.pathname} />
<Nav></Nav>
<NavFilterList></NavFilterList>

<slot />

<Footer />
