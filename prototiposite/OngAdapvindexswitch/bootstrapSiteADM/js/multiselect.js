$(document).ready(function() {
    $('#tags').select2({
        tags: true,
        tokenSeparators: [','],
        placeholder: 'Digite os nomes das pessoas...',
        // Opções adicionais conforme necessário
    });

    $('#tags').on('change', function() {
        // Aqui você pode lidar com a alteração das opções selecionadas, se necessário
        var selectedOptions = $(this).val();
        console.log(selectedOptions);
    });
});
  
$(document).ready(function() {
    $('#empresa').select2({
        tags: true,
        tokenSeparators: [','],
        placeholder: 'Digite os nomes das pessoas...',
        // Opções adicionais conforme necessário
    });

    $('#empresa').on('change', function() {
        // Aqui você pode lidar com a alteração das opções selecionadas, se necessário
        var selectedOptions = $(this).val();
        console.log(selectedOptions);
    });
});