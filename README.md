
---

### **Descrição do Componente (para documentação interna ou explicações)**

#### **Componente: SmartInput**

O `SmartInput` é um componente de interface de usuário (UI) para Angular, projetado para ser um campo de entrada de formulário flexível e reutilizável. Ele foi desenvolvido como um componente *standalone*, o que facilita sua integração em aplicações Angular modernas.

**Como Funciona:**

O principal recurso deste componente é a sua integração com os mecanismos de formulários do Angular, tanto o *Reactive Forms* quanto o *Template-Driven Forms*. Isso é alcançado através da implementação da interface `ControlValueAccessor`. 

A interface `ControlValueAccessor` atua como uma ponte, permitindo que o Angular se comunique com nosso componente personalizado como se fosse um elemento de formulário nativo (como `<input>` ou `<select>`). Para isso, implementamos os seguintes métodos:

*   `writeValue(value: any)`: Este método é chamado pelo Angular para definir o valor inicial do input.
*   `registerOnChange(fn: any)`: Aqui, registramos uma função de *callback* que será chamada sempre que o valor do input for alterado pelo usuário.
*   `registerOnTouched(fn: any)`: Registra uma função de *callback* para ser chamada quando o input receber o foco pela primeira vez e depois perdê-lo (estado "touched").
*   `setDisabledState(isDisabled: boolean)`: Permite que o Angular habilite ou desabilite o input.

Ao prover o `NG_VALUE_ACCESSOR`, informamos ao Angular que este componente pode ser utilizado com diretivas como `formControlName` ou `ngModel`.

**Estrutura do Código:**

-   **`@Input()` Decorators**: As propriedades `type`, `placeholder`, `label` e `inputName` são decoradas com `@Input()` para permitir que esses valores sejam passados de um componente pai, tornando o `SmartInput` configurável.
-   **Template**: O template define a estrutura HTML do componente, que consiste em uma `div` envolvendo uma `<label>` e um `<input>`. A `label` é associada ao `input` através da propriedade `inputName`.
-   **Event Binding**: O evento `(input)` do elemento `<input>` é capturado para chamar o método `onInput`, que por sua vez notifica o Angular sobre a mudança no valor.
