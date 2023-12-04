<script>
	import { applyAction, enhance } from '$app/forms'

	import FormField from '$lib/molecules/FormField.svelte'
	import SelectFormField from '$lib/molecules/SelectFormField.svelte';
    import FileFormField from '$lib/molecules/FileFormField.svelte';
	import Button from '$lib/atoms/Button.svelte'
	import LimitedFormField from '../molecules/LimitedFormField.svelte';

	export let formAction
	export let formMethod
    export let btnText
	export let data

    // Convert email field to titel field
    const contactpersoonObj = data.contactpersoons.map(({
        email: titel,
        ...rest
    }) => ({
        ...rest,
        titel
    }))

    // console.log(contactpersoonObj);

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

<form action={formAction} method={formMethod} use:enhance={handleSubmit} class:showLogin={showUpload} on:submit={toggleUpload} enctype="multipart/form-data">
	<div class="form-content">
		<!-- Naam -->
		<FormField
			iconSrc="/images/icons/user.svg"
			labelFor="werkvormName"
			labelText="Naam werkvorm"
			inputType="text"
			inputPlaceholder="Vul een naam in..."
			inputName="werkvormName"
			inputId="werkvormName"
            isRequired={false}
		/>

        <!-- Korte beschrijving -->
		<LimitedFormField
            iconSrc="/images/icons/description.svg"
            labelFor="werkvormShortDesc"
            labelText="Korte beschrijving werkvorm"
            inputType="text"
            inputPlaceholder="Vul een korte beschrijving in..."
            inputName="werkvormShortDesc"
            inputId="werkvormShortDesc"
            isRequired={false}
            maxLength="200"
        />

		<!-- Beschrijving -->
		<FormField
			iconSrc="/images/icons/description.svg"
			labelFor="werkvormDesc"
			labelText="Beschrijving werkvorm"
			inputType="text"
			inputPlaceholder="Beschrijf de werkvorm..."
			inputName="werkvormDesc"
			inputId="werkvormDesc"
            isRequired={false}
		/>

        <!-- Opleiding -->
		<SelectFormField
			iconSrc="/images/icons/school.svg"
			labelFor="werkvormOpleiding"
			labelText="Opleiding"
			selectName="werkvormOpleiding"
			selectId="werkvormOpleiding"
			selectPlaceholder="Selecteer een opleiding..."
			options={data.opleidings}
            isRequired={false}
		/>

        <!-- Studiejaar -->
        <FormField
            iconSrc="/images/icons/year.svg"
            labelFor="werkvormStudiejaar"
            labelText="Studiejaar"
            inputType="number"
            inputPlaceholder="Selecteer een studiejaar..."
            inputName="werkvormStudiejaar"
            inputId="werkvormStudiejaar"
            isRequired={false}
        />

        <!-- Contactpersoon -->
        <SelectFormField
			iconSrc="/images/icons/contact.svg"
			labelFor="werkvormContactpersoon"
			labelText="Contactpersoon"
			selectName="werkvormContactpersoon"
			selectId="werkvormContactpersoon"
			selectPlaceholder="Selecteer een contactpersoon..."
			options={contactpersoonObj}
            isRequired={false}
		/>

        <!-- Thumbnail -->
        <FileFormField
            iconSrc="/images/icons/thumbnail.svg"
            labelFor="werkvormThumbnail"
            labelText="Thumbnail werkvorm"
            inputType="file"
            inputName="werkvormThumbnail"
            inputId="werkvormThumbnail"
            inputPlaceholder="Selecteer een thumbnail..."
            isRequired={false}
            hasMultiple={false}
        />

        <!-- Video -->
        <FileFormField
            iconSrc="/images/icons/video.svg"
            labelFor="werkvormVideo"
            labelText="Video werkvorm"
            inputType="file"
            inputName="werkvormVideo"
            inputId="werkvormVideo"
            inputPlaceholder="Selecteer een video..."
            isRequired={false}
            hasMultiple={false}
        />

        <!-- Materialen -->
        <FileFormField
            iconSrc="/images/icons/materials.svg"
            labelFor="werkvormMaterialen"
            labelText="Materialen werkvorm"
            inputType="file"
            inputName="werkvormMaterialen"
            inputId="werkvormMaterialen"
            inputPlaceholder="Selecteer materialen..."
            isRequired={false}
            hasMultiple={false}
        />

        <!-- TODO Tags -->
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
