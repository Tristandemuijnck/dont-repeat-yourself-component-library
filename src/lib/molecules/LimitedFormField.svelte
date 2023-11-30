<script>
	import Icon from '$lib/atoms/Icon.svelte'
	import Label from '$lib/atoms/Label.svelte'
	import LimitedInput from '$lib/atoms/inputfields/LimitedInput.svelte'

	export let iconSrc
	export let labelFor
	export let labelText
	export let inputType
	export let inputPlaceholder
	export let inputName
	export let inputId
    export let isRequired
    export let maxLength
</script>

<div class="form-field">
	<span>
		<Icon {iconSrc} --icon-width="1.4rem"></Icon>
		<Label {labelFor} {labelText}></Label>
	</span>

	<LimitedInput {inputType} {inputPlaceholder} {inputName} {inputId} {isRequired} {maxLength}></LimitedInput>
</div>

<style>
    .form-field {
        display: flex;
        flex-direction: column;
    }
	span {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.3rem;
		margin-bottom: 0.3rem;
	}
</style>
