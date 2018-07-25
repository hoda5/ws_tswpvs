# ws_tswpvs
Estudo Typescript + Webpack + Visual Studio Code

# package @hoda5/tswpvssoma

```typescript
function soma(a: number, b: number): number {
  return a + b;
}
```

# package @hoda5/tswpvsdobro
  
```typescript
import {soma} from "@hoda5/tswpvssoma"
function dobro(x: number): number {
  return soma(x, x);
}
```

# package @hoda5/tswpvscalc
  
```typescript
import {soma} from "@hoda5/tswpvssoma"
import {dobro} from "@hoda5/tswpvdobro"

console.log( "1+2=", soma(1,2) )
console.log( "dobre de 3=", dobro(3) )

```

- [ ] se der tempo configurar jest
