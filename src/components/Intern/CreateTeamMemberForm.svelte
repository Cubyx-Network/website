<script lang="ts">
  import Modal from "../Common/Modal.svelte";
  import Formular from "../Common/Formular.svelte";

  export let open = false;
</script>

<Modal bind:open>
  <Formular action="?/createTeamMember" title="Neues Teammitglied">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="intro">Beschreibung:</label>
    <textarea id="intro" name="intro" required></textarea>

    <label for="avatar">Avatar:</label>
    <input type="text" id="avatar" name="avatar">

    <label for="youtube">YouTube:</label>
    <input type="text" id="youtube" name="youtube">

    <label for="mastodon">Mastodon:</label>
    <input type="text" id="mastodon" name="mastodon">

    <label for="discord">Discord:</label>
    <input type="text" id="discord" name="discord">

    <label for="twitch">Twitch:</label>
    <input type="text" id="twitch" name="twitch">

    <label for="reddit">Reddit:</label>
    <input type="text" id="reddit" name="reddit">

    <label for="github">GitHub:</label>
    <input type="text" id="github" name="github">

    <input type="submit" value="Submit">
  </Formular>
</Modal>
