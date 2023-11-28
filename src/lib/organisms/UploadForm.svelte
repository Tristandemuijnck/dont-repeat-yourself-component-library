<script>
	import { applyAction, enhance } from '$app/forms'

	import FormField from '$lib/molecules/FormField.svelte'
	import SelectFormField from '$lib/molecules/SelectFormField.svelte';
	import Button from '$lib/atoms/Button.svelte'
	import ImageFormField from '$lib/molecules/ImageFormField.svelte';
	import VideoFormField from '$lib/molecules/VideoFormField.svelte';
    import FileFormField from '$lib/molecules/FileFormField.svelte';

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
            isRequired={true}
		/>

        <!-- Werkvorm korte beschrijving -->
		<FormField
            iconSrc="/images/icons/email.svg"
            labelFor="werkvormDescShort"
            labelText="Korte beschrijving werkvorm"
            inputType="text"
            inputPlaceholder="Beschrijf de werkvorm kort..."
            inputName="werkvormDescShort"
            inputId="werkvormDescShort"
            isRequired={true}
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
            isRequired={true}
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
            isRequired={true}
		/>

        <!-- Studiejaar -->
        <FormField
            iconSrc="/images/icons/email.svg"
            labelFor="werkvormStudiejaar"
            labelText="Studiejaar"
            inputType="number"
            inputPlaceholder="Selecteer een studiejaar..."
            inputName="werkvormStudiejaar"
            inputId="werkvormStudiejaar"
            isRequired={true}
        />

        <!-- Contactpersoon -->
        <SelectFormField
			iconSrc="/images/icons/email.svg"
			labelFor="werkvormContactpersoon"
			labelText="Contactpersoon"
			selectName="werkvormContactpersoon"
			selectId="werkvormContactpersoon"
			selectPlaceholder="Selecteer een contactpersoon..."
			options={data.contactpersoons}
            isRequired={true}
		/>

        <!-- Thumbnail -->
        <ImageFormField
            iconSrc="/images/icons/email.svg"
            labelFor="werkvormThumbnail"
            labelText="Thumbnail werkvorm"
            inputType="file"
            inputPlaceholder="Selecteer een thumbnail..."
            inputName="werkvormThumbnail"
            inputId="werkvormThumbnail"
            isRequired={true}
        />

        <!-- Video -->
        <VideoFormField
            iconSrc="/images/icons/email.svg"
            labelFor="werkvormVideo"
            labelText="Video werkvorm"
            inputType="file"
            inputPlaceholder="Selecteer een video..."
            inputName="werkvormVideo"
            inputId="werkvormVideo"
            isRequired={true}
        />

        <!-- Materialen -->
        <FileFormField
            iconSrc="/images/icons/email.svg"
            labelFor="werkvormBestanden"
            labelText="Bestanden werkvorm"
            inputType="file"
            inputPlaceholder="Selecteer een bestand..."
            inputName="werkvormBestanden"
            inputId="werkvormBestanden"
            isRequired={true}
            hasMultiple={true}
        />
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
            margin-bottom: 5rem;
        }

        article {
            width: 30rem;
        }
    }
</style>
