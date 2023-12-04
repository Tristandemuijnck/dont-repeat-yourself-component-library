<script>

    
    import Nav from "$lib/organisms/nav.svelte"    
    import { page } from '$app/stores'
	import LoginOutButton from '../lib/organisms/LoginOutButton.svelte';

    export let data

    let loading = false

    const handleLogout = () => {
		loading = true
		return async ({ result }) => {
			await invalidate('supabase:auth')
			await applyAction(result)
			loading = false
		}
	}
 // Function to check if a werkvorm should be displayed based on selected tags
 function shouldDisplayWerkvorm(werkvorm) {
    return werkvorm.tags.some(tag => tag.checked);
  }

  // Function to check if a tag is selected
  function isTagSelected(tag) {
    return tag.checked;
  }

    
  
</script>


<main>

    <Nav {data}></Nav>
    <div>
        {#each data.werkvormen as werkvorm}
          {#if shouldDisplayWerkvorm(werkvorm)}
            <h1>{werkvorm.title}</h1>
            <p>{werkvorm.korteBeschrijving}</p>
            {#each werkvorm.tags as tag}
              {#if isTagSelected(tag)}
                <p style="border-color: {tag.kleur.css};">{tag.titel}</p>
              {/if}
            {/each}
          {/if}
        {/each}
      </div>

</main>

<style>
    main {
        display: flex;
		flex-direction: column;
		padding: 0 2rem;
		width: 100%;
    }
</style>