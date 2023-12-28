<script>
	import { faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
    import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
	import { Icon } from 'svelte-awesome';
</script>

<div class="flex flex-wrap pr-5 pl-5 pt-1 pb-5">
    <div class="flex-auto p-3">
        <h4>Minecraft</h4>
        <div class="box-content w-50 h-50">
            <div class="">
                <a class="text-base-content no-underline inline" href="/">
                    <p class="inline">Minecraft-Server.eu</p>
                    <Icon data={faLink} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} />
                </a>
            </div>
            <div class="">
                <p class="text-base inline">Vote:</p><input type="text" class="hover:object-scale-down h-5 m-2 bg-transparent border-2">
                <a class="inline" href="/"><Icon data={faThumbsUp} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} /></a>
            </div>
        </div>

        <div class="box-content w-50 h-50">
            <div class="">
                <a class="text-base-content no-underline inline" href="/">
                    <p class="inline">Coming soon!</p>
                    <Icon data={faLink} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} />
                </a>
            </div>
            <div class="relative">
                <p class="text-base inline">Vote:<input type="text" class="hover:object-scale-down h-5 m-2 bg-transparent border-2">
                <a class="inline" href="/"><Icon data={faThumbsUp} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} /></a> → </p>
                <Icon data={faGift} class="hidden min-w-[1rem] text-base-content md:block cursor-pointer"></Icon> 
            </div>
        </div>

        <div class="box-content w-50 h-50">
            <div class="">
                <a class="text-base-content no-underline inline" href="/">
                    <p class="inline">Coming soon!</p>
                </a>
            </div>
            <div class="">
                <p class="text-base inline">Vote:</p><input type="text" class="hover:object-scale-down h-5 m-2 bg-transparent border-2">
                <a class="inline" href="/"><Icon data={faThumbsUp} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} /></a>
            </div>
        </div>
    </div>
    <div class="bg-[#d79c1e] flex-auto p-3">
        <h4>Discord</h4>
        <div class="bg-[#111111] box-content w-50 h-50"><p>Hi</p></div>
        <div class="bg-[#111111] box-content w-50 h-50 mt-2"><p>Hi</p></div>
        <div class="bg-[#111111] box-content w-50 h-50 mt-2"><p>Hi</p></div>
    </div>
    <div class="bg-[#50d71e] flex-auto p-3">
        <h4>Weitere</h4>
        <div class="bg-[#111111] box-content w-50 h-50 mt-2"></div>
        <div class="bg-[#111111] box-content w-50 h-50 mt-2"><p>Hi</p></div>
        <div class="bg-[#111111] box-content w-50 h-50 mt-2"><p>Hi</p></div>

    </div>
</div>
