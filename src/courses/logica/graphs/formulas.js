/**
 * Formulari de grafs (s'afegeix als grups de kit/formulas.js). Ids: fg-<tema>-<n>.
 */
const L3 = (ca, es, en) => [ca, es, en];
const f = (id, t, x, note) => ({ id, t, x, note });
const same = (x) => [x, x, x];

export const GRAPH_FORMULAS = [
  { unit: 'gr1', t: L3('Grafs: valències i famílies', 'Grafos: valencias y familias', 'Graphs: degrees and families'), items: [
    f('fg-1-1', L3('Lema de les encaixades', 'Lema del apretón de manos', 'Handshake lemma'), same('$\\sum_{v} \\delta(v) = 2|E|$'), L3('un bucle suma 2; hi ha un nombre parell de vèrtexs senars', 'un bucle suma 2; hay un número par de vértices impares', 'a loop adds 2; the number of odd vertices is even')),
    f('fg-1-2', L3('Costats de les famílies', 'Lados de las familias', 'Edges of the families'), same('$|E(K_n)| = \\frac{n(n-1)}{2}$, $|E(K_{m,n})| = mn$, $|E(C_n)| = n$, $|E(W_n)| = 2(n-1)$')),
    f('fg-1-3', L3('Graf r-regular', 'Grafo r-regular', 'r-regular graph'), same('$|E| = \\frac{r\\,n}{2}$')),
    f('fg-1-4', L3('Complementari', 'Complementario', 'Complement'), same('$|E(G)| + |E(\\overline{G})| = \\frac{n(n-1)}{2}$')),
  ] },
  { unit: 'gr2', t: L3('Grafs: matrius', 'Grafos: matrices', 'Graphs: matrices'), items: [
    f('fg-2-1', L3('Successions de costats', 'Sucesiones de lados', 'Walks'), L3('$(A^k)_{ij}$ = successions de longitud $k$ de $v_i$ a $v_j$', '$(A^k)_{ij}$ = sucesiones de longitud $k$ de $v_i$ a $v_j$', '$(A^k)_{ij}$ = walks of length $k$ from $v_i$ to $v_j$')),
    f('fg-2-2', L3('Diagonal de A²', 'Diagonal de A²', 'Diagonal of A²'), L3('graf simple: $(A^2)_{ii} = \\delta(v_i)$; triangles $= \\frac{1}{6}\\operatorname{tr}(A^3)$', 'grafo simple: $(A^2)_{ii} = \\delta(v_i)$; triángulos $= \\frac{1}{6}\\operatorname{tr}(A^3)$', 'simple graph: $(A^2)_{ii} = \\delta(v_i)$; triangles $= \\frac{1}{6}\\operatorname{tr}(A^3)$')),
  ] },
  { unit: 'gr3', t: L3('Grafs: connexió', 'Grafos: conexión', 'Graphs: connectivity'), items: [
    f('fg-3-1', L3('Simple i connex', 'Simple y conexo', 'Simple and connected'), same('$n - 1 \\le |E| \\le \\frac{n(n-1)}{2}$')),
    f('fg-3-2', L3('k components', 'k componentes', 'k components'), same('$|E| \\le \\frac{(n-k)(n-k+1)}{2}$'), L3('més de $\\frac{(n-1)(n-2)}{2}$ costats ⇒ connex', 'más de $\\frac{(n-1)(n-2)}{2}$ lados ⇒ conexo', 'more than $\\frac{(n-1)(n-2)}{2}$ edges ⇒ connected')),
  ] },
  { unit: 'gr4', t: L3('Grafs: Euler i Hamilton', 'Grafos: Euler y Hamilton', 'Graphs: Euler and Hamilton'), items: [
    f('fg-4-1', 'Euler', L3('connex: 0 senars ⇔ circuit; 2 senars ⇔ camí', 'conexo: 0 impares ⇔ circuito; 2 impares ⇔ camino', 'connected: 0 odd ⇔ circuit; 2 odd ⇔ path')),
    f('fg-4-2', 'Dirac', same('$\\delta(v) \\ge \\frac{n}{2}\\ \\forall v \\Rightarrow$ Hamilton')),
    f('fg-4-3', 'Ore', L3('$\\delta(u) + \\delta(v) \\ge n$ per a $u, v$ no adjacents $\\Rightarrow$ Hamilton', '$\\delta(u) + \\delta(v) \\ge n$ para $u, v$ no adyacentes $\\Rightarrow$ Hamilton', '$\\delta(u) + \\delta(v) \\ge n$ for non-adjacent $u, v \\Rightarrow$ Hamilton')),
  ] },
  { unit: 'gr5', t: L3('Grafs: Dijkstra', 'Grafos: Dijkstra', 'Graphs: Dijkstra'), items: [
    f('fg-5-1', L3('Actualització', 'Actualización', 'Update'), same('$L(w) = \\min\\{L(w),\\ L(u) + \\lambda(u, w)\\}$'), L3('si millora, $a(w) = u$', 'si mejora, $a(w) = u$', 'if it improves, $a(w) = u$')),
  ] },
  { unit: 'gr6', t: L3('Grafs: planaritat', 'Grafos: planaridad', 'Graphs: planarity'), items: [
    f('fg-6-1', L3('Fórmula d\'Euler', 'Fórmula de Euler', 'Euler\'s formula'), same('$v - e + c = 2$'), L3('connex; amb $k$ components, $k + 1$', 'conexo; con $k$ componentes, $k + 1$', 'connected; with $k$ components, $k + 1$')),
    f('fg-6-2', L3('Cotes (simple, connex, $v \\ge 3$)', 'Cotas (simple, conexo, $v \\ge 3$)', 'Bounds (simple, connected, $v \\ge 3$)'), L3('$e \\le 3v - 6$; sense triangles $e \\le 2v - 4$', '$e \\le 3v - 6$; sin triángulos $e \\le 2v - 4$', '$e \\le 3v - 6$; no triangles $e \\le 2v - 4$')),
    f('fg-6-3', L3('Graf dual', 'Grafo dual', 'Dual graph'), same('$n^* = c,\\ m^* = m,\\ c^* = n$')),
  ] },
  { unit: 'gr7', t: L3('Grafs: acoloriment', 'Grafos: coloración', 'Graphs: colouring'), items: [
    f('fg-7-1', L3('Nombre cromàtic', 'Número cromático', 'Chromatic number'), L3('$\\gamma(K_n) = n$; bipartit $\\Leftrightarrow \\gamma \\le 2$; $\\gamma \\le \\delta_{max} + 1$; planar $\\Rightarrow \\gamma \\le 4$', '$\\gamma(K_n) = n$; bipartito $\\Leftrightarrow \\gamma \\le 2$; $\\gamma \\le \\delta_{max} + 1$; planar $\\Rightarrow \\gamma \\le 4$', '$\\gamma(K_n) = n$; bipartite $\\Leftrightarrow \\gamma \\le 2$; $\\gamma \\le \\delta_{max} + 1$; planar $\\Rightarrow \\gamma \\le 4$')),
    f('fg-7-2', L3('Índex cromàtic', 'Índice cromático', 'Chromatic index'), same('$\\delta_{max} \\le \\kappa(G) \\le \\delta_{max} + 1$')),
    f('fg-7-3', L3('Polinomi cromàtic', 'Polinomio cromático', 'Chromatic polynomial'), same('$P_G = P_{G + uv} + P_{G / uv}$; $P_{K_n} = k(k-1)\\cdots(k-n+1)$; $P_{\\text{arbre}} = k(k-1)^{n-1}$; $P_{C_n} = (k-1)^n + (-1)^n(k-1)$')),
  ] },
  { unit: 'gr8', t: L3('Grafs: arbres', 'Grafos: árboles', 'Graphs: trees'), items: [
    f('fg-8-1', L3('Arbre', 'Árbol', 'Tree'), same('$|E| = n - 1$')),
    f('fg-8-2', L3('m-ari regular', 'm-ario regular', 'Full m-ary'), same('$n = m\\,i + 1$, $\\quad t = (m-1)\\,i + 1$')),
  ] },
  { unit: 'gr9', t: L3('Grafs: C.P.M.', 'Grafos: C.P.M.', 'Graphs: CPM'), items: [
    f('fg-9-1', 'Early', same('$T_Y = \\max_{X \\in C}\\,[T_X + d(X)]$')),
    f('fg-9-2', 'Last', same("$T'_X = \\min_{Y \\in C'}\\,[T'_Y] - d(X)$")),
    f('fg-9-3', L3('Marges', 'Márgenes', 'Slack'), same("$M^T(X) = T'_X - T_X$, $\\quad M^L(X) = \\min_{Y \\in C'}[T_Y] - T_X - d(X)$")),
  ] },
];
