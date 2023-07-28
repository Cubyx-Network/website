<script>
  import Timeline from "./Timeline.svelte";

  let items = [
    {
      title: "Cubyx wird als reines Bauteam eröffnet",
      description: "",
      date: "Januar 2020",
      position: "left",
    },
    {
      title: "Netzwerk-Aufbau",
      description: "",
      date: "Oktober 2020",
      position: "right",
    },
    {
      title: 'Cubyx startet sein erstes Survival Projekt "Tecta"',
      description: "",
      date: "August 2021",
      position: "left",
    },
    {
      title: "Cubyx schließt seine Forten der Öffentlichkeit gegenüber",
      description: "",
      date: "Oktober 2021",
      position: "right",
    },
    {
      title: "Cubyx wird Netzwerk Team",
      description: "",
      date: "Juni 2022",
      position: "left",
    },
    {
      title: "Cubyx veröffentlicht das Netzwerk neu!",
      description: "",
      date: "Dezember 2022",
      position: "right",
    },
  ]
</script>

<div class="m-auto w-full flex justify-center p-8">
  <Timeline items={items.reverse()} />
</div>
