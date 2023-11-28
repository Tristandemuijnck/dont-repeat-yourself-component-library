<script>
    export let inputType
    export let inputPlaceholder
    export let inputName
    export let inputId
    export let isRequired
    export let hasMultiple
</script>

<input type="{inputType}" placeholder="{inputPlaceholder}" name="{inputName}" id="{inputId}" required={isRequired} multiple={hasMultiple}>

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