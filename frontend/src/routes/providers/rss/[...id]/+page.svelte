<script lang="ts">
    import type { PageData } from './$types';
	export let data: PageData;
</script>
<h1>{data.title}</h1>
<h2>Feed Items</h2>
<table>
    <tr>
        <th>Title</th>
        <th>Link</th>
    </tr>
    {#each data.items as { title, link }}
    <tr>
        <td>{title}</td>
        <td>{link}</td>
    </tr>
    {/each}
</table>