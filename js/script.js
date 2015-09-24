var body;
var list_item;
var ordered_list;
var input_box;
var input_default_text;
var submit_button;
var end_of_list;
var list_element;


function plug_in_element(element_name){
    return body.appendChild(
        document.createElement(element_name));
}

function create_list_item(){
    list_item = document.createElement('li');
        ordered_list.appendChild(list_item);
        
}

function update_item(){
    
    list_element = ordered_list.children;
    
    
}


function button_task(){
    
    create_list_item();
    update_item();
    end_of_list = list_element[(list_element.length - 1)];
    end_of_list.innerText = input_box.value;
    input_box.value = '';
    
    list_item.addEventListener('contextmenu', function(event){
         this.remove();
        event.preventDefault();
        return false;
    },false);
    
}




document.addEventListener('DOMContentLoaded', function(){
    
        body = document.getElementsByTagName('body')[0];
        
        submit_button = plug_in_element('button');
        submit_button.textContent = 'Add to List';
       
        
        input_box = plug_in_element('input');
        input_default_text = 'Enter in text for list';
        input_box.value = input_default_text;
        
        
        
         ordered_list = plug_in_element('ol');
        
    submit_button.addEventListener('click', function(){
            
            button_task();
            
        });
        
    
});


