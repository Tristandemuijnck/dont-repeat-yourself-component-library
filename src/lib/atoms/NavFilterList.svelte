<script>
   

    export let data;
  
    console.log(data)
    console.log(data.tags)

   
</script>

<!-- tags stond binnen werkvormen in de query en daarom werkte het niet -->
<!-- wanneer een werkvorm maar 1 tag had werd tags niet meer als array gezien en kan er geen for each doorheen loopen -->
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
