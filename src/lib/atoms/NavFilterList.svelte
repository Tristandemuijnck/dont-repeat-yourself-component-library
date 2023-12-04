<script>
    

    export let data;
   
    // een array met de id's van de tags die header moeten worden
    const headerTagIds = ['clpl0vr7g16x10bvz5txuso4g' , 'clpl0rq3814cl0bvzawxbkmtm', 'clpldj1qq2d5r0bw483xnvoyh', 'clpldjitj6nx10bw03rhqup1v'];
    
     // in dit variabel zitten de tags overeenkomen met een specifiek id. 
    // the filter() is een methode
    // de => opent een functie
    // includes() is een methode
    const headerFilterTags = data.tags.filter(tag => headerTagIds.includes(tag.id));
    
    
    // // alleen de tags die gecheckt zijn worden teruggegeven
    // function filterMatch(tag) {
    //     return tag.checked;
    // }

    // // dit is om de tag uit en aan de kunnen toggelen
    // function handleCheckboxChange(tag) {
    //     tag.checked = !tag.checked;
    // }

      // functie om de tagtitel te laten matchen met de tag titel van de werkvorm

  function filterMatch(tagTitel, werkvorm){
    // tagtitel wordt teruggegevn wanneer de tag checked is
  return tagTitel === werkvorm.tag.checked
 }
    

</script>

<!-- tags stond binnen werkvormen in de query en daarom werkte het niet -->
<!-- wanneer een werkvorm maar 1 tag had werd tags niet meer als array gezien en kan er geen for each doorheen loopen -->

  <div class="tag">
    <ul>
      {#each headerFilterTags as tag}
      <!-- de tag is aan een checkbox verbonden zodat de state geregisteerd wordt -->
      <input type="checkbox" bind:checked={tag.checked} on:change={() => handleCheckboxChange(tag)} />
      {/each}
    </ul>
    <ul>
      {#each data.tags as tag}
      <!-- dit if statement checkt of de tag in de lijst met headerTagIds zit -->
        {#if !headerTagIds.includes(tag.id)}
        <!-- als de tag er niet inzit dan wordt hier de titel getoond -->
        <li>{tag.titel}<input type="checkbox" bind:checked={tag.checked} on:change={() => filterMatch(tag)} /></li>
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
