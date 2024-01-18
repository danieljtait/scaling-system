<script lang="ts">
	import type { PageData } from './$types';
    export let data: PageData
</script>
<div>
    {#each data.chat.messages as msg}
    {msg.text}
    {/each}
</div>
<h1>Chat</h1>
<form method="POST" action="?/sendmsg">
    <textarea name="propmt"></textarea>
    <button type="submit">{">>"}</button>
</form>