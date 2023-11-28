<script>
    
    import Nav from "$lib/organisms/nav.svelte"    
    export let tagData;
    export let data;
</script>




<main>

    <Nav {data}{tagData}></Nav>

</main>

<style>
    main {
        display: flex;
		flex-direction: column;
		padding: 0 2rem;
		width: 100%;
    }
</style>