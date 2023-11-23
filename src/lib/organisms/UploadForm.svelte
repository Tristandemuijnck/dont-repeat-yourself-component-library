<script>
	import { applyAction, enhance } from '$app/forms'

	import FormField from '$lib/molecules/FormField.svelte'
	import SelectFormField from '$lib/molecules/SelectFormField.svelte';
	import Button from '$lib/atoms/Button.svelte'

	export let formAction
	export let formMethod
    export let btnText
	export let data

	let loading = false
    let showUpload = true;
    let showVerify = false;

	const handleSubmit = () => {
		loading = true
		return async ({ result }) => {
			await applyAction(result)
			loading = false
		}
	}

    const toggleUpload = () => {
        showUpload = !showUpload;
        showVerify = !showVerify;
    }
</script>

<form action={formAction} method={formMethod} use:enhance={handleSubmit} class:showLogin={showUpload} on:submit={toggleUpload}>
	<div class="form-content">
		<!-- Werkvorm naam -->
		<FormField
			iconSrc="/images/icons/email.svg"
			labelFor="werkvormName"
			labelText="Naam werkvorm"
			inputType="text"
			inputPlaceholder="Vul een naam in..."
			inputName="werkvormName"
			inputId="werkvormName"
		/>
		<!-- Werkvorm beschrijving -->
		<FormField
			iconSrc="/images/icons/email.svg"
			labelFor="werkvormDesc"
			labelText="Beschrijving werkvorm"
			inputType="text"
			inputPlaceholder="Beschrijf de werkvorm..."
			inputName="werkvormDesc"
			inputId="werkvormDesc"
		/>
		<!-- Faculteit -->
		<SelectFormField
			iconSrc="/images/icons/email.svg"
			labelFor="werkvormFaculty"
			labelText="Faculteit"
			selectName="werkvormFaculty"
			selectId="werkvormFaculty"
			selectPlaceholder="Selecteer een faculteit..."
			options={data.faculteits}
		/>
        <!-- Opleiding -->
		<SelectFormField
			iconSrc="/images/icons/email.svg"
			labelFor="werkvormOpleiding"
			labelText="Opleiding"
			selectName="werkvormOpleiding"
			selectId="werkvormOpleiding"
			selectPlaceholder="Selecteer een opleiding..."
			options={data.opleidings}
		/>

        <!-- TODO File input form field for thumbnail, max 1 -->

        <!-- TODO File input form field for video, max 1 -->

        <!-- TODO File input form field for bestanden, max 3 -->
	</div>

	<Button btnType="submit" {btnText}></Button>
</form>

<!-- Check email -->
<article class:showVerify={showVerify}>
    <h2>Werkvorm succesvol geüpload</h2>
</article>

<style>
	form {
		display: none;
		flex-direction: column;
		row-gap: 2rem;
	}

    .showLogin {
        display: flex;
    }

	.form-content {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background: var(--form-bg, #1e1649);
        row-gap: 1rem;
	}

    .showVerify {
        display: flex;
    }

    article {
        display: none;
        flex-direction: column;
        justify-content: center;
        row-gap: 0.5rem;
        padding: 2rem 2rem;
        background: var(--color-hva-navy);
    }

    article h2{
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
    }

    article p{
        font-size: 0.9rem;
        font-weight: 400;
        text-align: center;
    }

    @media (min-width: 48rem) {
        form {
            width: 30rem;
        }

        article {
            width: 30rem;
        }
    }
</style>
