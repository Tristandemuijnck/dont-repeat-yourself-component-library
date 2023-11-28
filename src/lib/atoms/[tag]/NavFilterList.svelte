<script>
   

    export let data;
    let tag = data.tags;
    console.log(data.tags)

   
</script>


{#each data.tags as tag}
<div class="tag">
    <p>{tag.titel}</p>
</div>
{/each}

<style>
.tag{
    font-size: 10rem;
    color: hotpink;
}
</style>
