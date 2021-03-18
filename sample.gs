/**
 * 自分が使うためだけのライブラリであれば共有設定を変更する必要はない。
 * ライブラリとして使用するには最低一つのバージョンが必要。 
 */

class Person {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * this.name said 'message'.
   * @param {string} message
   */
  say(message){
    console.log(`${this.name} said '${message}'.`);
  }
}

/**
 * ライブラリ上のクラスは直接newできないのでファクトリ関数を設置
 * @param {string} name
 * @return {Object} Person
 */
function createPerson(name){
  return new Person(name);
}

function test_say(){
  var person = createPerson("John");
  person.say("Constantine"); 
}