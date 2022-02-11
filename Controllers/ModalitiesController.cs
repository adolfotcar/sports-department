using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsDepartment.Data;
using SportsDepartment.Models;

namespace SportsDepartment.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class ModalitiesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModalitiesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Modalities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Modality>>> GetModality()
        {
            return await _context.Modality.Include(m => m.Teacher).ToListAsync();
        }

        // GET: api/Modalities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Modality>> GetModality(int id)
        {
            var modality = await _context.Modality.Include(m => m.Teacher).FirstAsync(m => m.ModalityId == id);

            if (modality == null)
            {
                return NotFound();
            }

            return modality;
        }

        // PUT: api/Modalities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModality(int id, Modality modality)
        {
            if (id != modality.ModalityId)
            {
                return BadRequest();
            }

            _context.Entry(modality).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModalityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Modalities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Modality>> PostModality(Modality modality)
        {
            _context.Modality.Add(modality);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModality", new { id = modality.ModalityId }, modality);
        }

        // DELETE: api/Modalities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModality(int id)
        {
            var modality = await _context.Modality.FindAsync(id);
            if (modality == null)
            {
                return NotFound();
            }

            _context.Modality.Remove(modality);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModalityExists(int id)
        {
            return _context.Modality.Any(e => e.ModalityId == id);
        }
    }
}
