# Compilador de C++ al navegador

Fitxers de tercers, ja empaquetats, que s'executen com a Web Workers clàssics
(vegeu `src/shared/cpp/engine.js`):

| Fitxer | Contingut | Origen |
|---|---|---|
| `clang-worker.js` | cadena d'eines Clang/LLD per a WebAssembly + cola del projecte | [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm) 0.3 (LLVM 22, llicència Apache-2.0 amb excepcions LLVM) |
| `run-worker.js` | executa el binari wasm32-wasi amb stdin i captura stdout/stderr | [`@bjorn3/browser_wasi_shim`](https://www.npmjs.com/package/@bjorn3/browser_wasi_shim) 0.4 (MIT/Apache-2.0) |
| `interp-worker.js` | intèrpret de reserva quan Clang no es pot carregar | [`JSCPP`](https://www.npmjs.com/package/JSCPP) 2.0.9 (MIT) |

Els binaris del compilador (`public/clang/`, ≈29 MB) són els de `@live-codes/clang-wasm`,
partits en trossos de menys de 8 MB. El navegador només els baixa el primer cop que
s'executa un programa i després els guarda a la memòria cau.
