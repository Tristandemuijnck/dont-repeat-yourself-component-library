<script>
    export let btnType
    export let btnText
</script>

<div class="submit-button">
    <div class="icon-box">
        <img src="/images/icons/arrow-right.svg" alt="">
    </div>
    <button type="{btnType}">{btnText}</button>
</div>

<style>
    .submit-button {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 1rem;
    }

    .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0rem;
        background: var(--color-hva-pink, #F25379);
        padding: 0.5rem;
        aspect-ratio: 1/1;
        transform: rotate(45deg);
        transition: transform 0.2s ease-in-out;
    }

    .icon-box > img {
        width: 1rem;
        height: 1rem;
        transform: rotate(-45deg);
    }

    button {
        padding: 0.9rem 1.8rem 0.9rem 2.3rem;
        border: none;
        background-color: var(--btn-color, #1E1649);
        color: var(--color-white, #ffffff);
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
    }

    button:hover{
        background-color: var(--btn-hover-bg, #362e61);
    }

    .submit-button:has(button:hover) .icon-box {
        transform: scale(1.5);
    }

    button:focus {
        outline: var(--btn-focus, #F25379) solid 2px;
    }
</style>