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


  // functie om de tagtitel te laten matchen met de tag titel van de werkvorm

//   function filterMatch(tagTitel, werkvorm){
//     // tagtitel wordt teruggegevn wanneer de tag checked is
//   return tagTitel === werkvorm.tag.checked
//  }
    
//  const filtered = data.werkvormen.filter(werkvorm => werkvorm.tag.titel === werkvorm.tag.checked);


</script>


<main>

    <Nav {data}></Nav>
    <div>
        {#each data.werkvormen as werkvorm}
            <h1>{werkvorm.title}</h1>
            <p>{werkvorm.korteBeschrijving}</p>
            {#each werkvorm.tags as tag}
               <!-- als de tag.titel met de werkvorm titel match dan wordt het kaartje getoont -->
            <!-- {#if filterMatch(tag.titel, werkvorm.title)} -->
                <p style="border-color: {tag.kleur.css};">{tag.titel}</p>
              <!-- {/if} -->
            {/each}
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