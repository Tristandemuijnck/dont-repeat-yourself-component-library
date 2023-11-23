<script>
	import { applyAction, enhance } from '$app/forms'

	import FormField from '$lib/molecules/FormField.svelte'
	import Button from '$lib/atoms/Button.svelte'

	export let formAction
	export let formMethod
    export let btnText

	let loading = false
    let showLogin = true;
    let showVerify = false;

	const handleSubmit = () => {
		loading = true
		return async ({ result }) => {
			await applyAction(result)
			loading = false
		}
	}

    const toggleLogin = () => {
        showLogin = !showLogin;
        showVerify = !showVerify;
    }
</script>

<form action={formAction} method={formMethod} use:enhance={handleSubmit} class:showLogin={showLogin} on:submit={toggleLogin}>
	<div class="form-content">
		<FormField
			iconSrc="/images/icons/email.svg"
			labelFor="email"
			labelText="Emailadres"
			inputType="text"
			inputPlaceholder="Vul hier uw emailadres in"
			inputName="email"
			inputId="email"
		></FormField>
	</div>

	<Button btnType="submit" {btnText}></Button>
</form>

<!-- Check email -->
<article class:showVerify={showVerify}>
    <h2>Verificatie vereist</h2>
    <p>Check uw email voor de verificatie link.</p>
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
