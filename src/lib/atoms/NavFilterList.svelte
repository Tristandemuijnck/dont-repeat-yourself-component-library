<script>
    export let data;

    import { onMount } from 'svelte';

    onMount(() => {
        if (data) {
            console.log(data);

            data.tags.forEach((tag) => {
                console.log(tag.title);
            });
        } else {
            console.log("Data is undefined.");
        }
    });
</script>

{#if data && data.tags}
    {#each data.tags as tag}
        <li class="tag">{tag.title}</li>
    {/each}
{/if}
