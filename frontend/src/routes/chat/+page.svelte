<script lang="ts">
	import type { PageData } from './$types';
    export let data: PageData
</script>
<div class="bg-white rounded-lg h-full">
    <h1>Chat</h1>
    <div class="bg-slate-300 m-3 p-3">
        {#each data.chat.messages as msg}
            {#if msg.role == "User" }
            <div class="w-full bg-white rounded-lg ml-auto mr-0 mb-3 p-2.5 w-5/6 bg-green-100">
                {msg.text}
            </div>
            {:else}
            <div class="w-full bg-white rounded-lg mb-3 p-2.5 w-5/6 mr-0">
                {msg.text}
            </div>
            {/if}
        {/each}
    </div>
    <div class="bg-fuchsia-100">
        <form method="POST" action="?/sendmsg">
            <textarea name="prompt"></textarea>
            <button type="submit">{">>"}</button>
        </form> 
    </div>
</div>