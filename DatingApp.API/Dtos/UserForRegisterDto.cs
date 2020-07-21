using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Campo requerido")]
        public string Username  { get; set; }
        [Required(ErrorMessage="Campo requerido")]
        [StringLength(8, MinimumLength = 4, ErrorMessage="El password debe estar entre 4 y 8 caracteres")]
        public string Password { get; set; }
    }
}