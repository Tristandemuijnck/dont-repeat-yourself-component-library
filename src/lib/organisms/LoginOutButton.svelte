<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/atoms/Button.svelte';
    import LinkButton from '$lib/atoms/LinkButton.svelte';

	const handleLogout = () => {
		return async ({ result }) => {
			await invalidate('supabase:auth');
			await applyAction(result);
		};
	};
</script>



{#if $page.data.session}
    <form action="/logout" method="post" use:enhance={handleLogout}>
        <Button btnType="submit" btnText="Uitloggen"></Button>
    </form>
{:else}
    <LinkButton linkHref="/login" linkText="Inloggen"></LinkButton>
{/if}
