from typing import Any, List

def encontrar_elemento_en_lista(elemento: Any, lista: list[Any]) -> bool:
    for elemento_actual  in lista:
        if (elemento_actual == elemento):
            return True
        return False
    

    encontrar_elemento_en_lista(3, [3, 4, 5, 7, 7, 2, 1])
