<script lang="ts">
    import type { PageData } from './$types';
	export let data: PageData;

    console.log(data);
</script>

<h1>Providers</h1>
<form method="POST">
    <button type="submit">+</button>
</form>
<table>
    <tr>
        <th>Id</th>
        <th>Kind</th>
    </tr>
    {#each data.providers as { id, kind }}
    <tr>
        <td><a href={`/providers/${id}`}>{id}</a></td>
        <td>{kind}</td>
    </tr>
    {/each}
</table>