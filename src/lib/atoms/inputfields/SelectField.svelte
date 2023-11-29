<script>
	export let selectName;
	export let selectId;
	export let selectPlaceholder;
	export let options;
    export let isRequired;
</script>

<select name={selectName} id={selectId} required={isRequired}>
    <option value="" disabled>{selectPlaceholder}</option>
    {#each options as option}
        <option value={option.id}>{option.titel}</option>
    {/each}
</select>

<style>
	select {
		border: solid 2px var(--border-color, #ffffff);
		padding: 0.5rem 0.8rem;
		background-color: var(--input-bg, #1e1649);
		color: var(--input-color, #ffffff);
	}

	select::placeholder {
		color: rgba(255, 255, 255, 0.4);
		font-style: italic;
	}

	select:focus {
		outline: var(--btn-focus, #f25379) solid 2px;
	}
</style>
