
<script>
    export let werkvormen
    export let data
</script>

<pre>
    {#each data.werkvormen as werkvorm}

    {#each werkvormen.tag as tag}
    <li>{werkvorm.tag}</li>
    {/each}
    {/each}
</pre>