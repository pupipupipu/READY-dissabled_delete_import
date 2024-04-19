define(["jquery"], function ($) {
  var CustomWidget = function () {
    var self = this,
      system = self.system;
    this.callbacks = {
      settings: function () {},
      init: function () {
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        const userData = {
          users: {
            //Дима
            8043655: {
              staff: "egorovdmitrii"
            },
						//Дима тест
						10598585: {
              staff: "egorovdmitrii"
            },
            //Федя
            8056487: {
              staff: "fa-koloskov"
            },
            //Сервис бот
            7989952: {
              staff: "cargo_service_bot_amo"
            },
            // Я
            9999129: {
              staff: "ab102030"
            },

						//// Модерация
            8043508: {
              staff: "trubitsin2903"
            },
            7990933: {
              staff: "shkolaen"
            },
            8043787: {
              staff: "kovalevaira"
            },
            7990921: {
              staff: "anastasiasov"
            },
            8043493: {
              staff: "anastreva"
            },
            8043970: {
              staff: "pasihnichenko"
            },
            10823537: {
              staff: "evgenia-gu"
            },
            7991074: {
              staff: "sysolyatina-d"
            },
            10680125: {
              staff: "bulatkris"
            },
            10823521: {
              staff: "a-v-panfilov"
            },
            8043775: {
              staff: "pashk-inna"
            }
          },
        };

        //ID юзера
        let idUser = document.querySelector(".n-avatar.js-left-avatar").id;

        function deleteButton() {
          // Проверяем, есть ли idUser в списке пользователей
          if (userData.users[idUser]) {
            
          } else {
            waitForSelector(() => {
              const button = document.querySelector(
                '.button-input__context-menu__item.element__.js-list-import'
              );
							button.remove();
            }, '.button-input__context-menu__item.element__.js-list-import');
          }
        }

          /////// Ожидание появления селектора
          function waitForSelector(workFunction, selector) {
            // Передаваемый элемент
            const targetElement = document.querySelector(selector);

            if (targetElement) {
              workFunction();
            } else {
              // Создаем экземпляр MutationObserver с колбэком, который будет вызываться при изменениях
              const observer = new MutationObserver(
                (mutationsList, observer) => {
                  // Проверяем, есть ли сейчас элементы, соответствующие вашему селектору
                  const targetElementNow = document.querySelector(selector);

                  if (targetElementNow) {
                    // Если элемент найден, останавливаем отслеживание и запускаем скрипт
                    observer.disconnect();
                    workFunction();
                  }
                }
              );

              // Начинаем отслеживание изменений в корне документа и его потомках
              observer.observe(document.documentElement, {
                childList: true,
                subtree: true,
              });
            }
          }
          /////// Ожидание появления селектора

        deleteButton();

        // Создаем экземпляр MutationObserver
        const observer = new MutationObserver((mutationsList, observer) => {
          // Проверяем каждое изменение в списке мутаций
          for (let mutation of mutationsList) {
            // Проверяем, был ли удален элемент с нужным селектором
            if (mutation.type === "childList") {
              mutation.removedNodes.forEach((node) => {
                if (node.matches && node.matches('[data-type="reassign"]')) {
                  // Если элемент с нужным селектором был удален, вызываем нужный алгоритм
                  deleteButton();
                }
              });
            }
          }
        });
        return true;
      },
      contacts: {
        selected: function () {},
      },
      leads: {
        selected: function () {},
      },
      onSave: function () {
        return true;
      },
    };
    return this;
  };
  return CustomWidget;
});
