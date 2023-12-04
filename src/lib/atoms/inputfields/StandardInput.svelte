<script>
    export let inputType = "text"
    export let inputPlaceholder = "placeholder"
    export let inputName = ""
    export let inputId = ""
    export let isRequired = false
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}" required={isRequired || false}>

<style>
    input{
        border: solid 2px var(--border-color, #ffffff);
        padding: 0.5rem 0.8rem;
        background-color: var(--input-bg, #1E1649);
        color: var(--input-color, #ffffff);
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-style: italic;
    }

    input:focus {
        outline: var(--btn-focus, #F25379) solid 2px;
    }
</style>