<script>
	import { applyAction, enhance } from '$app/forms';
    import LoginForm from '$lib/organisms/LoginForm.svelte';
</script>

<main>
	<section>
		<!-- Heading -->
		<header>
			<h1>Login</h1>
			<p>
				Log nu in om jouw werkvorm te uploaden, favoriete werkvormen op te slaan en werkvormen te
				delen met collega's.
			</p>
		</header>

		<!-- Login Form -->
        <LoginForm formAction="?/send-magiclink" formMethod="POST" btnText="Inloggen"></LoginForm>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}

    section {
        display: flex;
        flex-direction: column;
        margin: 6rem auto 0;
        gap: 3rem;
        max-width: 25rem;
    }

    header {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    h1 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    header > p {
        font-size: 0.9rem;
        font-weight: 400;
    }

	@media (min-width: 48rem) {
		main {
			height: calc(100dvh - 9rem);
			/* justify-content: center; */
		}

        section {
            flex-direction: row;
            gap: 2rem;
            margin: 0 auto;
            max-width: unset;
            position: relative;
            top: 25%;
        }

        header {
            justify-content: center;
            max-width: 20rem;
        }
	}

    @media (min-width: 64rem){
        section{
            gap: 4rem;
        }

        header h1 {
            font-size: 3rem;
        }

        header > p {
            font-size: 1rem;
        }
    }
</style>
