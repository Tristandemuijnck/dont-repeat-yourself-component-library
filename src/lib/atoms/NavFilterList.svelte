<script>
   

    export let data;
  
    console.log(data)
    console.log(data.tags)

   
</script>

<!-- tags stond binnen werkvormen in de query en daarom werkte het niet -->
<!-- wanneer een werkvorm maar 1 tag had werd tags niet meer als array gezien en kan er geen for each doorheen loopen -->
{#each data.tags as tag}
<div class="tag">
    <label for="tag">{tag.titel}</label><input type="checkbox" />
</div>
{/each}

<style>

label{
    
    margin: .5em;
    padding: .5em;
  }
 
  .filter-menu input[type="checkbox"]{
    margin-left: 1em;
  }
.tag{
    font-size: 2rem;
    color: hotpink;
}
</style>
