<script>
    export let titel = 'Default Titel';
    export let paragraph = 'Default paragraph text';
    export let data;
    console.log(data);

    // Add any other variables or functions you need                                                                                                                                        v
</script>

<section class="werkvorm-component">
    <picture>
        <img src="mac-p-g-t.png" alt="mac with code editor">
    </picture>
    <article>
        <h2>Naam Werkvorm</h2>
        <p>Aan het begin van een <br> ontwerp traject is deze <br> werkvorm in te zetten om <br> studenten meer persoonlijk te
            <br> betrekken bij het onderwerp.</p>
        <div>
            <a href="[id]/+page.svelte"><i src="pijl.png" class="Pijl-icoon"></i><span>Lees meer</span></a>
            <a href="[id]/+page.svelte"><i src="pijl.png" class="Pijl-icoon"></i><span>Bekijk de introvideo</span></a>
        </div>
    </article>
</section>
<style>

    .werkvorm-component{
        font-family: 'Open Sans', sans-serif;
        font-size: ExtraBold 35px;
        margin-top: 25rem;
        margin-bottom: 30rem;
        padding: 2rem;
        max-width: max-content;
        display: flex;
        background-color:#1E1649;
        color: #D7D7D7;

    }
    picture{
        margin: 2rem;
        max-width: 100%;
    }
    h2{
        margin-top: 2rem;
        font-weight: ExtraBold 35px;
        font-size: 2rem
    }
    p{
        font-family: 'Open Sans', sans-serif;
        margin-top: 1rem;
        font-size: ExtraBold 20px;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }
    a {
        margin-top: 0.5rem;
        text-decoration: none;
        pointer: focus;
    }
    span{
        color: #D7D7D7;
        text-decoration: none;
    }
    @media (max-width: 40rem) {
        .werkvorm-component {
            flex-direction: column;
            font-size: 1rem;
        }

        article {
            margin-left: 2rem;
        }
        picture{
            margin: 2rem;
        }
    }
</style>