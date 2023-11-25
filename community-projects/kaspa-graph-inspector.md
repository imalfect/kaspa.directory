---

---
# Kaspa Graph Inspector

## Project Information
<!---
Feel free to add/remove fields as you see fit.
--->
- Category: Utilities
## Links
- [Webiste](https://kgi.kaspad.net/)

## Project Description
Kaspa Graph Inspector - Displaying the Kaspa Network Block DAG in real time.

KGI comprises four components:

* A postgres database
* A `processing` kaspa node (this is simply a kaspad wrapped in some extra logic)
* An `api` REST server
* A `web` server

How the components interact:

* The `processing` node connects to the Kaspa network the same way a regular kaspad node does and starts syncing just as a kaspad node would
* While it's syncing, it writes metadata about every block to the postgres database
* From the other end, the `web` server listens to http requests on some port
* When a user navigates their browser to that port, the `web` server serves the KGI clientside logic, which includes the UI
* The clientside logic calls the `api` REST server every so often
* The `api` REST server queries the postgres database and returns it to the clientside
* The clientside uses the response it received from the `api` REST server to update the UI

## Screenshots
![One](https://media.discordapp.net/attachments/1138764714747363369/1178086182022815804/image.png?ex=6574dd41&is=65626841&hm=634520f251c2bfd481d45bf53da1c7ec0196531d7c8561d8269c08db19a6db74)
