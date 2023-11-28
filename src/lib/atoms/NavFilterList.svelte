<script>
    import { onMount } from 'svelte';

    export let data;
    export let tagData;

    onMount(async () => {
        console.log(data);
        

        console.log(tagData);
       
    });
</script>


    <!-- {#each data.werkvormen as werkvorm}
        <div>{werkvorm.title}</div>
    {/each}



    {#each tagData.tags as tag}
        <div>{tag.titel}</div>
    {/each} -->

