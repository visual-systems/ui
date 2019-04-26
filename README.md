

Intended to provide a light-weight in-browser UI for creating and updating graphs.

Inspiration:

* https://cytoscape.org/cytoscape.js-klay/

The Visual Systems UI is split into the following pieces:

### Simple Graph Layer

* Visualise a graph (Data-Import)
* Show nodes, edges
* Browser / Tree of components
* Attribute viewer/editor
* Runner with Data-Input
* Allow actions:
	- Select items to view attributes
	- Create a new node
	- Draw edges between nodes
	- Delete nodes / edges
	- Define graph interface
		+ Possibly through non-connected nodes
		+ Possibly through attributes
	- Undo
	- Dive into a node
	- Exit out of a node
	- Browse list / heirachy of nodes
	- Expand nodes in place
	- Create boundaries
	- Destroy boundaries
	- Hook: What nodes to allow edge to

### Data-Export

* Export to cannonical representation of graph with decorations

### Type-Checking

* Integration of type-checker for graph structure as a connection hook

### Data-Import

* Type-checking on load
