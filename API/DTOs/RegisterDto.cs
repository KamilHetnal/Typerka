using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$", 
            ErrorMessage = "Hasło musi zawierać małą i dużą literę oraz cyfrę. Musi mieć conajmniej 4 znaki i nie więcej niż 12")]
        public string Password { get; set; }
        [Required]
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public string RegisterPassword { get; set; }
    }
}