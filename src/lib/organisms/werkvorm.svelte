<script>
    export let data;
    console.log(data);
    console.log(data.werkvormen[0].korteBeschrijving);

    console.log(data.werkvormen);
    console.log(data.werkvormen[0]);
    console.log(data.werkvormen[0].korteBeschrijving);
    console.log(data.werkvormen[0].korteBeschrijving[0]);
</script>

<section class="workvorm-container">
    {#each data.werkvormen as werkvorm}
        <section class="werkvorm-component">
            <picture class="thumbnail-img__container">
                <img src={werkvorm.thumbnail.url} alt="mac with code editor" class="thumbnail-img">
            </picture>
            <article>
                <h2>{werkvorm.title}</h2>
                    <p>{werkvorm.korteBeschrijving}</p>
                <div class="links-container">
                    <a href=/{werkvorm.link}>
                        <img src="Pijl.svg" alt="Pijl icoon" class="pijl-icoon">
                        <span>Lees meer</span>
                    </a>
                    <a href=/{werkvorm.link}>
                        <img src="Pijl.svg" alt="Pijl icoon" class="pijl-icoon">
                        <span>Bekijk de introvideo</span>
                    </a>
                </div>

                <div class="werkvorm-tags-container">
                    {#each werkvorm.tags as tag}
                        <span class="werkvorm-tag">
                            {tag.titel}
                        </span>
                    {/each}
                </div>

            </article>
        </section>
    {/each}
</section>

<style>
    .workvorm-container {
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        gap: 10rem;
    }

    .werkvorm-component {
        font-family: 'Open Sans', sans-serif;
        font-weight: ExtraBold;
        margin-bottom: 3rem;
        padding: 1rem;
        max-width: max-content;
        display: flex;
        flex-direction: row;
        color: #D7D7D7;
        flex-flow: row wrap;
        border: solid 1px #1E1649;
        box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
    }

    article {
        margin-left: 1rem;
        min-width: 25rem;
    }

    .thumbnail-img__container {
        margin: 2rem;
        max-width: 245px;
    }
    .thumbnail-img{
        width: 100%;
        height: auto;
    }

    h2 {
        margin-top: 2rem;
        font-weight: ExtraBold;
        font-size: 35px
    }

    p {
        font-family: 'Open Sans', sans-serif;
        margin-top: 1rem;
        font-weight: ExtraBold;
        font-size: 20px

    }

    .links-container {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }
    .links-container a{
        display: flex;
        margin-bottom: 1rem;
    }
    .links-container img{
        margin-right: 0.5rem;
    }

    a {
        margin-top: 0.5rem;
        text-decoration: none;
        pointer: focus;
    }
    .pijl-icoon {

    }

    span {
        color: #D7D7D7;
        text-decoration: none;
    }
    .werkvorm-tag {
        border: solid 3px #66E5BF;
        padding: 0.5rem;
        margin-right: 0.5rem;
        margin-top: 1rem;
        font-size: 1rem;
    }

    @media (max-width: 40rem) {
        .werkvorm-component {
            flex-direction: column;
            font-size: 1rem;
        }

        article {
            margin-left: 2rem;
        }

        .thumbnail-img__container {
            margin: 2rem;
        }
    }
    @media (max-width: 63rem) {
        .thumbnail-img__container {
            max-width: 300px;
        }

        .thumbnail-img {
            width: 100%;
            height: auto;

        }
    }
</style>