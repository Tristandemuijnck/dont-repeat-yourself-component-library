<script>
	import Icon from '$lib/atoms/Icon.svelte'
	import Label from '$lib/atoms/Label.svelte'
	import ImageInputField from '$lib/atoms/ImageInputField.svelte'

	export let iconSrc
	export let labelFor
	export let labelText
	export let inputType
	export let inputPlaceholder
	export let inputName
	export let inputId
    export let isRequired
</script>

<div class="form-field">
	<span>
		<Icon {iconSrc} --icon-width="1.4rem"></Icon>
		<Label {labelFor} {labelText}></Label>
	</span>

	<ImageInputField {inputType} {inputPlaceholder} {inputName} {inputId} {isRequired}></ImageInputField>
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
