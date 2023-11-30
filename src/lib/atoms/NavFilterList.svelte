<script>
   

    export let data;
    const tagIds = ['clpl0vr7g16x10bvz5txuso4g' , 'clpl0rq3814cl0bvzawxbkmtm', 'clpldj1qq2d5r0bw483xnvoyh', 'clpldjitj6nx10bw03rhqup1v'];
    const headerFilterTags = data.tags.filter(tag => tagIds.includes(tag.id));
  
    console.log(data)
    console.log(data.tags)

   
</script>

<!-- tags stond binnen werkvormen in de query en daarom werkte het niet -->
<!-- wanneer een werkvorm maar 1 tag had werd tags niet meer als array gezien en kan er geen for each doorheen loopen -->

  <div class="tag">
    <ul>
      {#each headerFilterTags as tag}
        <li><h2>{tag.titel}<input type="checkbox" /></h2></li>
      {/each}
    </ul>
    <ul>
      {#each data.tags as tag}
        {#if !tagIds.includes(tag.id)}
          <li>{tag.titel}<input type="checkbox" /></li>
        {/if}
      {/each}
    </ul>
      
    
  </div>


<style>

  ul:first-of-type{
    display: flex;
    flex-direction: column;
   
   
  }
  ul > li{
    padding: .5em;
    margin-left: 1.5em;
  }

 
  ul input[type="checkbox"]{
    margin-left: 1em;
  }
@media (min-width: 700px){
  ul:first-of-type{
    display: flex;
    flex-direction: row;
  }
  ul{
    display: flex;
    
    width: 75vw;
  }
}
</style>
