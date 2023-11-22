<script>
  // filter staat standaard uit, het menu is standaard uitgeklapt
  let mobileDropdownActive = true;
  let filterDropdownActive = false;

  function openMobileMenu() {
    // Check if the screen width is less than 700px (or any other threshold you prefer)
    // Deze functie checkt of de scherm breedte minder dan 700 pixels is. 
    // wanneer het scherm kleiner is dan 700px werkt de knop, anders werkt deze niet.
    if (window.innerWidth < 700) {
      mobileDropdownActive = !mobileDropdownActive;

      // filter dropdown sluit ook wanneer het menu gesloten wordt
      if (!mobileDropdownActive) {
        filterDropdownActive = false;
      }
    }
  }

  function openFilter() {
    // funtie die kijkt of filterdropdown true of false is en deze naar de andere staat dan de huidige staat toe togglt.
      filterDropdownActive = !filterDropdownActive;
   
  }
</script>

<nav>
  <section class="nav-bar" class:active={mobileDropdownActive}>
    <!-- menu is a mobile only button -->
    
      <div class="mobile-menu-dropdown">
        <button on:click={openMobileMenu}>Menu</button>
    {#if mobileDropdownActive}
        <button on:click={openFilter}> Filteren en zoeken</button>
        <a href="/">Inloggen</a>
        <a href="/">Werkvorm uploaden</a>
      
    {/if}
    </div>
    <section class="filter-dropdown" class:active={filterDropdownActive}>
      {#if filterDropdownActive}
        <section class="search-bar" role="search">
          <!-- dit kan een form zijn -->
          <form action="search">
            <label for="search" class="sr-only">Zoekbalk</label>
            <input type="text" id="search" name="search" aria-label="Search" />
            <button type="submit" aria-label="Submit search">Zoek</button>
          </form>
        </section>
        <section class="filter-menu">
          <ul class="focus">
            <li><h2> Focus<input type="checkbox"></h2></li>
            <li>Ik<input type="checkbox"></li>
            <li>De ander<input type="checkbox"></li>
            <li>De wereld<input type="checkbox"></li>
          </ul>
          <ul class="doel">
            <li><h2> Doel<input type="checkbox"></h2></li>

            <li>Professioneel id ontwikkelen<input type="checkbox"></li>
            <li>
             Persoonlijke interesse aanspreken<input type="checkbox">
            </li>
            <li>Kennis opdoen <input type="checkbox"></li>
            <li>Richtlijnen toepassen<input type="checkbox"></li>
            <li>Golden oldies verrijken<input type="checkbox"></li>
            <li>Tools toepassen<input type="checkbox"></li>
            <li>Dialoog voeren<input type="checkbox"></li>
            <li>Praktijk betrekken<input type="checkbox"></li>
          </ul>
          <ul class="onderwerp">
            <li><h2> Onderwerp<input type="checkbox"></h2></li>

            <li>Duurzaamheid<input type="checkbox"></li>
            <li>Diversiteit<input type="checkbox"></li>
            <li>Digitalisering<input type="checkbox"></li>
            <li>Democratie<input type="checkbox"></li>
          </ul>
          <ul class="fase">
            <li><h2>Fase<input type="checkbox" > </h2></li>
            <li>Opwarmer<input type="checkbox"></li>
            <li>Verbreden<input type="checkbox"></li>
            <li>Verdiepen<input type="checkbox"></li>
            <li>Uitwisselen<input type="checkbox"></li>
          </ul>
          
          <button class="activate-filters">Filters toepassen</button>
       
        </section>
       
      {/if}
    </section>
  </section>
</nav>

<style>
  * {
   
    color: white;
    margin: 0;
  }
  .mobile-menu-dropdown > button {
    font-size: 2em;
    width: 100vw;
    background-color: #25167a;
    border: 0;
    padding: 1em;
  }

  .mobile-menu-dropdown > button:focus {
    background-color: #66e5bf;
  }

  .mobile-menu-dropdown {
    background-color: #25167a;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .mobile-menu-dropdown *:focus {
    outline: 2px solid #66e5bf;
    background-color: #66e5bf;
    color: black;
  }
  .mobile-menu-dropdown * {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1em;
  }

  .mobile-menu-dropdown > button {
    position: relative;
    background-color: #25167a;
    border: 0;

    font-size: 1em;
    justify-content: center;
  }
   /* zoekbalk */
   .search-bar{
    padding: 2em 0 0 1.5em;
    
  }
  .search-bar input[type="text"]{
    margin-left: 1em;
    width: 60vw;
  }
  .sr-only{
    position: absolute;
    left: -99999999px;
  }

  .filter-dropdown {
    background-color: #25167a;
  }


  /* functionaliteit voor menu */
  .filter-menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size:1rem;
    
  }
  .filter-menu ul{
    
    margin: .5em;
    padding: .5em;
  }
  .filter-menu ul > li{
    list-style-type: none;
    margin: 1em;
    
  }

  .filter-menu input[type="checkbox"]{
    margin-left: 1em;
  }

  .nav-bar.active .mobile-menu-dropdown,
  .filter-dropdown.active {
    /* display: block; */
    visibility: visible;
  
  }

  .activate-filters{
    display: flex;
    height: max-content;
    align-self: flex-end;
    padding:1em;
    margin: 1em;
    
  }

  /* container query ipv media? */
  @media (min-width: 700px) {
    
    .nav-bar {
      font-size: 2em;
      display: flex;
      width: 80vw;
      position: relative;
      margin-bottom: 5em;
      
    }
    
    .nav-bar.active {
      box-shadow: 13px 20px 0px 1px black;
    }
   
    
    .mobile-menu-dropdown {
      width: 80vw;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left:1em;
    }
    


    .mobile-menu-dropdown > button {
      align-items: center;
      font-size: 0.7em;
      width: auto;
    }
    .mobile-menu-dropdown a:nth-child(1) {
      padding-right: 0;
     
    }
 .nav-bar.active {
    /* display: block; */
    visibility: visible;
    display: flex;
    flex-direction: column;
    
  }
  .search-bar{
    padding: 0 0 1em 1em;
  }
    
 
  .search-bar input[type="text"]{
    margin-left: 1em;
    width: 20vw;
  }
  
  .filter-menu{
    padding-left: 1em;
    
  }
  
 

 
  }
</style>
