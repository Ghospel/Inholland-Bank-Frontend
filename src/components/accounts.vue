<template>
  <div id="secure">
    <v-app id="inspire">
      <h1>Personal Account</h1>
      <p />
        <v-data-table :headers="headers" :items="values" class="elevation-1" hide-actions>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.iban }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
            <td class="text-xs-left">{{ props.item.balance }}</td>
            <td class="text-xs-left">{{ props.item.minimalBalance }}</td>
            <td class="text-xs-left">{{ props.item.daylimit }}</td>
          </template>
        </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "accounts",
  // To use props, they must be declared
  props: {
    headers: Array,
    values: Array,
  }
};
</script>